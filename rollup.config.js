import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "mvk-ui",
        sourcemap: true,
    },
    external: ["react", "react-dom"],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "tsconfig.json" }),
        postcss({
            extensions: ['.css'],
        }),
    ],
});
