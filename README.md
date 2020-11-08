# -Deno-error-Uncaught-PermissionDenied-read-access-to-CWD-
Replication of a possible bug about Deno permisson "--allow-read".

```shell
❯ deno run --unstable --allow-read="../a","../b" index.ts

error: Uncaught PermissionDenied: read access to <CWD>, run again with the --allow-read flag
    at processResponse (core.js:226:13)
    at Object.jsonOpSync (core.js:250:12)
    at Object.cwd (deno:cli/rt/30_fs.js:56:17)
    at Module.resolve (win32.ts:38:19)
    at copySync (copy.ts:271:14)
    at test2 (index.ts:18:5)
    at index.ts:24:1
```
