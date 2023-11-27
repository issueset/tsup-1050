import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'esnext',
  platform: 'neutral',
  format: 'esm',
  experimentalDts: true,
  entry: ['./src/components/ComponentA/index.tsx'],
})
