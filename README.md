# richerFoobar Plugin for Vencord
A plugin that provides a simple header rewrite to allow Cider to show as the listening activity type.

Created by cryptofyre 

## Installation Guide

#### You'll need the following dependencies
- Git ([https://git-scm.com](https://git-scm.com/download))
- Node.JS (https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi)
- pnpm (Install with `npm install -g pnpm`)

### Run the following in Powershell
```
git clone https://github.com/Vendicated/Vencord; curl https://raw.githubusercontent.com/calzonees/RicherFoobar-Vencord/main/richerFoobar.desktop.tsx -o Vencord/src/plugins/richerFoobar.desktop.tsx; cd Vencord/; pnpm install; pnpm build; pnpm inject;
```

### Setting up Foobar Rich Presence
- Docs from component author s0hv available ([HERE](https://s0hv.github.io/foo_discord_rich/))
- Download and install ([the component](https://github.com/s0hv/foo_discord_rich/releases/latest)) to foobar
- Download an upload script, detailed in the component docs (Album Artwork > Upload scripts)
- Depending on which script you selected (refer to docs), change the Preferences > Tools > Discord Rich Presence Integration > Advanced > Artwork Upload Command setting accordingly and check "Upload artwork"

### Disclaimers
- I am in no way, shape, or form a Discord modder. I simply swapped the app ids from the original plugin.
- Therefore, unmodified, this plugin is intended to only work with s0hv's component.
- If you are using a custom fb2k rich presence solution or otherwise, you will need to add its id to "appIds".

#### Do not use public forks including this file as we cannot assure the legitmacy of the repo and its contents.
