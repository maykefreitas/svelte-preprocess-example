import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import serve from 'rollup-plugin-serve'
import { terser } from "rollup-plugin-terser";
import { scss } from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    svelte({
      preprocess: [
        scss({
          prependData: ".foo { color: green; }"
        }),
        // Uncomment the code bellow for a workaround
        // {
        //   async style(file) {
        //     if(file.attributes.lang === 'scss') {
        //       return await scss({
        //         prependData: ".foo { color: green; }"
        //       }).style(file);
        //     } else {
        //       return { code: file.content }
        //     }
        //   }
        // }
      ]
    }),

    resolve(),
    commonjs(),
    production && terser(),
    !production && serve('public')
  ].filter(Boolean)
};
