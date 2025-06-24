import { type Registry } from "creight/registry"

export const lib: Registry["items"] = [
  {
    name: "cx",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/cx.ts",
        type: "registry:lib",
      },
    ],
  },
]
