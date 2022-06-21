# Figma Design Tokens Exporter

The **Figma Design Tokens Exporter** plugin for figma allows you to export design tokens into a json format that can be used with the [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/) package.

## How to use this plugin
1. Download Figma Desktop
2. Clone this repository and run > npm install && npm run build
3. Go to Figma > Plugins > Manage Plugins and under development click on **Import plugin from manifest...**
4. Browse your cloned repository and choose the **manifest.json** file at the root of the project
5. Use the plugin going to Figma > Plugins > Development > Design Tokens > Export Design Tokens

## How to create icon tokens
1. Make sure to collapse all your children into 1 element. Verify that your icon is a VECTOR type element (tip: you can check if the icon on the tree is the graphic you've just created)
2. Group all your icons into a frame and name it following this pattern: **_tokens/YOUR_GROUP_NAME** for example: _tokens/home-icons
3. Rename your flattened icon to something that follows this pattern: **icon/YOUR_ICON_NAME** for example: _icon/home-icon-alt
