module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'transform-imports',
      {
        '@/atoms': { transform: '@/atoms/${member}', preventFullImport: true },
        '@/icons': { transform: '@/icons/${member}', preventFullImport: true },
        '@/hooks': { transform: '@/hooks/${member}', preventFullImport: true },
        '@/components': { transform: '@/components/${member}', preventFullImport: true },
        '@/utils': { transform: '@/utils/${member}', preventFullImport: true },
      },
    ],
  ],
};
