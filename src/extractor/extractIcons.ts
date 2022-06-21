import extractorInterface from "@typings/extractorInterface";
import { iconPropertyInterface } from "@typings/propertyObject";
import { customTokenNode } from "@typings/tokenNodeTypes";
import { tokenTypes } from "@config/tokenTypes";
import { filterByPrefix } from "./extractUtilities";
import { tokenExportKeyType } from "@typings/tokenExportKey";
import { tokenCategoryType } from "@typings/tokenCategory";
import config from "@config/config";

const extractIcons: extractorInterface = (
  tokenNodes: customTokenNode[],
  prefixArray: string[]
): iconPropertyInterface[] => {
  return tokenNodes.filter(filterByPrefix(prefixArray)).map((node) => ({
    name: node.name,
    category: "icon" as tokenCategoryType,
    exportKey: tokenTypes.icon.key as tokenExportKeyType,
    description: node.description || null,
    values: {
      path: node.path,
    },
    extensions: {
      [config.key.extensionPluginData]: {
        exportKey: tokenTypes.icon.key as tokenExportKeyType,
      },
    },
  }));
};

export default extractIcons;
