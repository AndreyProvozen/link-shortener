module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'transform-imports',
      {
        // '@/atoms': { transform: 'src/atoms/${member}', preventFullImport: true },
        '@/icons': { transform: '@/icons/${member}', preventFullImport: true },
        // '@/components': { transform: 'src/components/${member}', preventFullImport: true },
        // '@/utils': { transform: '@/utils/${member}', preventFullImport: true },
      },
    ],
  ],
};
