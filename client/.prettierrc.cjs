module.exports = {
    plugins: [
      ["@trivago/prettier-plugin-sort-imports"],
      ['prettier-plugin-tailwindcss']
    ],
    importOrder: ["^react", "<THIRD_PARTY_MODULES>", "^@\\/", "^\\.\\/"],
    importOrderSeparation: true,
  };