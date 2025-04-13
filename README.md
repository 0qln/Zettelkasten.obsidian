# Zettelkasten Obsidian configuration

This repository is an obsidian configuration, enabling you to have fun while filling your [Zettelkasten](https://zettelkasten.de/introduction/)! :D

Feel free to fork and cusomize your personal Zettelkasten.


## Components

Different components are seperated into their own repositories:
- [git](https://github.com/0qln/git.obsidian): Backups and version control
- [keys](https://github.com/0qln/keys.obsidian): Key bindings and Vim configuration
- [appearance](https://github.com/0qln/appearance.obsidian): Background image, color theme, etc.
- [zettelkasten-bundle](https://github.com/0qln/zettelkasten-bundle.obsidian): Zettelkasten specific plugins (e.g. templates, footnotes)

This is such that you can decide which modules you want, and that the version controls don't clutter each other:
Don't want vim bindings? Don't include the keys repository.
Don't want the default appearance? Create your own repository or fork the default one.
etc.

The .obsidian-setup repository contains a helper script for setting up symlinks and copies.


## File tree

The file structure will look something like this:

```
MyZettelkasten/
├── .obsidian/
│   └── ...
├── Notes/
│   ├── note-1742392401394.md
│   └── note-1742403634777.md
├── Canvas/
│   ├── Global.canvas
│   ├── MyProject.canvas
│   └── MyOtherProject.canvas
├── Resources/
│   ├── capybara-image-yaay.png
│   └── interesting-paper.pdf
└── Templates/
    └── Note.md
```

### Notes

Your notes will be placed here. For the notes, we don't use traditional naming systems, since the purpose of that traditional system was to enable linking (and a little tagging), which Obsidian can do natively.

Note, that you will want to create notes by: 
- Opening the global search bar
- Typing in the name of your note
- Pressing `Shift + Enter`

![image](https://github.com/user-attachments/assets/c3736b48-cbe9-4172-aa3f-615b0ae0995e)

This way the new note will automatically be placed into the `Notes/` folder and [Templater](https://github.com/SilentVoid13/Templater) will activate correctly:

![image](https://github.com/user-attachments/assets/e8f73535-1e1b-4151-8297-a3a9fc05db51)


### Canvas

Here you will be able to arrange markdown notes, just like analog ones.


### Resources

This is where files that your notes link to (e.g. images, PDFs) will be placed.


### Templates

The Templates for your notes. The Node.md template will be generated upon executing the setup script.


## Usage

**Prerequisits**: Python


**Installation**: 

1. Clone the contents into your .obsidian folder:
```
git clone --recurse-submodules https://github.com/0qln/Zettelkasten.obsidian Path/to/myVault/.obsidian
```

2. Execute the [.obsidian-setup/setup.py script](https://github.com/0qln/.obsidian-setup):
```
py Path/to/myVault/.obsidian/.obsidian-setup/setup.py
```
