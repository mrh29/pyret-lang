import * as E from "estree";
({
  requires: [
    { "import-type": "dependency", protocol: "file", args: ["./ast.arr"] }
  ],

  provides: {
    values: {
      "const-id": ["arrow", ["String"], "tany"]
    }
  },
  nativeRequires: [],

  theModule: function(runtime : any, _, __, ast : any) {
    const gf = runtime.getField;
    const sname = gf(gf(ast, "values"), "s-name");
    const dummyloc = gf(gf(ast, "values"), "dummy-loc");
    function toReturn(name : string) {
      return sname.app(dummyloc, name);
    }


    return runtime.makeModuleReturn({
      "const-id": runtime.makeFunction(toReturn)
    }, {});
  }
})
