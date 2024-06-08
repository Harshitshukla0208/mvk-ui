import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import image from '@rollup/plugin-image';
import babel from "@rollup/plugin-babel";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "mvk-ui",
    },
    external: ["react", "react-dom"],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "tsconfig.json" }),
        postcss({
            extensions: [".css"],
            minimize: true,
            sourceMap: true,
            plugins: [autoprefixer()],
        }),
        babel({
            exclude: "node_modules/**",
            babelHelpers: "bundled",
            presets: [
                "@babel/preset-react",
                "@babel/preset-typescript",
                "@babel/preset-env",
            ],
        }),
        image(), // Add @rollup/plugin-image to handle image imports
    ],
});
