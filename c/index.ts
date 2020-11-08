// @ts-ignore
import { copySync } from "https://deno.land/std@0.76.0/fs/mod.ts";

const decoder : TextDecoder = new TextDecoder(`utf-8`);

async function fileRead(path : string) : Promise<string>
{
    return ( decoder.decode(await Deno.readFile(path)) );
};


async function test1()
{
    console.log(await fileRead("../a/0/.txt"));
};
async function test2()
{
    copySync("../a/0", "../b/0", { overwrite: true });
    
    console.log(await fileRead("../b/0/.txt"));
};

test1(); // works
test2(); // error