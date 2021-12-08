export {
  any,
  anyArray,
  anyNumber,
  anyOf,
  anyString,
  arrayContaining,
  defineExpect,
  objectContaining,
  stringMatching,
  test,
} from "https://deno.land/x/unitest@v1.0.0-beta.52/mod.ts";
import { defineGlobalThis } from "https://deno.land/x/unitest@v1.0.0-beta.52/mock/global_this.ts";
import {
  defineExpect,
  jestExtendedMatcherMap,
  jestMatcherMap,
  jestModifierMap,
} from "https://deno.land/x/unitest@v1.0.0-beta.52/mod.ts";

const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    ...jestExtendedMatcherMap,
  },

  modifierMap: jestModifierMap,
});

export function fetchSpy() {
  const fetchMock: { url?: string | Request | URL } = {};
  const reset = defineGlobalThis("fetch", (input) => {
    fetchMock.url = input;
    return Promise.resolve(new Response(JSON.stringify({})));
  });

  return {
    localThis: {
      fetchMock,
    },
    teardown() {
      reset();
    },
  };
}

export { expect };
