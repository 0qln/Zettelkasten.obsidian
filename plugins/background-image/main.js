/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/Plugin.ts
var import_obsidian2 = require("obsidian");

// src/PluginSettingsTab.ts
var import_obsidian = require("obsidian");
var blurLevels = {
  off: "0px",
  low: "5px",
  high: "15px"
};
var positionOptions = {
  center: "center",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left"
};
var UrlSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const instructions = containerEl.createEl("div");
    instructions.createEl("p", { text: "The URL needs to be a remote resource, and does not yet (or at least not on my machine) support local files." });
    instructions.createEl("p", { text: "Some of the other settings, like opacity, bluriness, and input contrast, are helpers to tweak your experience." });
    instructions.createEl("a", { href: "https://github.com/shmolf/obsidian-editor-background/issues", text: "Submit an issue" });
    new import_obsidian.Setting(containerEl).setName("Background Image URL").setDesc("URL for the background image to load.").addText(
      (text) => text.setPlaceholder("https://example.com/image.png").setValue(this.plugin.settings.imageUrl).onChange(async (value) => {
        this.plugin.settings.imageUrl = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Background Opacity").setDesc("Opacity of the background image should be between 0% and 100%.").addText(
      (text) => text.setPlaceholder(`${(DEFAULT_SETTINGS.opacity || 1) * 100}`).setValue(`${this.floatToPercent(this.plugin.settings.opacity)}`).onChange(
        async (value) => {
          this.plugin.settings.opacity = this.percentToFloat(Number(value));
          await this.plugin.saveSettings();
        }
      )
    );
    new import_obsidian.Setting(containerEl).setName("Image Bluriness").setDesc("Increasing the blur can help make the text more legible.").addDropdown((dropdown) => {
      dropdown.addOption(blurLevels.off, "Off").addOption(blurLevels.low, "Low").addOption(blurLevels.high, "High").setValue(this.plugin.settings.bluriness).onChange(async (value) => {
        this.plugin.settings.bluriness = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Input Area Contrast Background").setDesc("This adds a translucent background for the input area, to help improve legibility.").addToggle((toggle) => {
      toggle.setTooltip("Enable to increase the contrast of the input area.").setValue(this.plugin.settings.inputContrast).onChange(async (value) => {
        this.plugin.settings.inputContrast = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Image Position").setDesc("Reposition the image in cases where the focus is not centered.").addDropdown((dropdown) => {
      Object.entries(positionOptions).forEach(([key, value]) => dropdown.addOption(key, value));
      dropdown.setValue(this.plugin.settings.position).onChange(async (value) => {
        this.plugin.settings.position = value;
        await this.plugin.saveSettings();
      });
    });
  }
  floatToPercent(value) {
    return Math.max(0, Math.min(1, value)) * 100;
  }
  percentToFloat(value) {
    return Math.max(0, Math.min(100, value)) / 100;
  }
};

// src/Plugin.ts
var DEFAULT_SETTINGS = {
  imageUrl: "protocol://domain.tld/path/to/image.png",
  opacity: 0.3,
  bluriness: "low",
  inputContrast: false,
  position: "center"
};
var BackgroundPlugin2 = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new UrlSettingsTab(this.app, this));
    this.app.workspace.onLayoutReady(() => this.UpdateBackground(document));
    this.app.workspace.on("window-open", (win) => this.UpdateBackground(win.doc));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.UpdateBackground();
  }
  UpdateBackground(doc = activeDocument) {
    doc.body.style.setProperty("--obsidian-editor-background-image", `url('${this.settings.imageUrl}')`);
    doc.body.style.setProperty("--obsidian-editor-background-opacity", `${this.settings.opacity}`);
    doc.body.style.setProperty("--obsidian-editor-background-bluriness", `blur(${this.settings.bluriness})`);
    doc.body.style.setProperty("--obsidian-editor-background-input-contrast", this.settings.inputContrast ? "#ffffff17" : "none");
    doc.body.style.setProperty("--obsidian-editor-background-line-padding", this.settings.inputContrast ? "1rem" : "0");
    doc.body.style.setProperty("--obsidian-editor-background-position", this.settings.position);
  }
};

// main.ts
var main_default = BackgroundPlugin2;


/* nosourcemap */