// server.ts
import { serveDir } from 'https://deno.land/std/http/file_server.ts'

const port = parseInt('8080')

Deno.serve({ port }, (req) => serveDir(req, { fsRoot: './public', urlRoot: '' }))
