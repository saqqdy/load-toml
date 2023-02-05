import { existsSync, promises, readFileSync } from 'fs'
import stripBom from 'strip-bom'
import { type JsonMap, parse, stringify } from '@iarna/toml'

/**
 * parse toml data
 *
 * @param data - file path
 * @returns - result
 */
export function parseToml(data: string): JsonMap | null {
	try {
		return parse(stripBom(data))
	} catch (err: any) {
		console.error(err)
		return null
	}
}

/**
 * stringify toml data
 *
 * @param data - file path
 * @returns - result
 */
export function stringifyToml(data: JsonMap): string | null {
	try {
		return stringify(data)
	} catch (err: any) {
		console.error(err)
		return null
	}
}

/**
 * load .toml
 *
 * @example
 * ```ts
 * import { loadToml } from 'load-toml'
 * const data = await loadToml('/path/of/toml') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export async function loadToml(path: string | Buffer | URL): Promise<unknown | null> {
	if (!existsSync(path)) {
		console.error(`${path} is not exists`)
		return null
	}
	return parseToml(await promises.readFile(path, 'utf8'))
}

/**
 * load .toml sync
 *
 * @example
 * ```ts
 * import { loadTomlSync } from 'load-toml'
 * const data = loadTomlSync('/path/of/toml') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export function loadTomlSync(path: string | Buffer | URL): unknown | null {
	if (!existsSync(path)) {
		console.error(`${path} is not exists`)
		return null
	}
	return parseToml(readFileSync(path, 'utf8'))
}

export default {
	parseToml,
	stringifyToml,
	loadToml,
	loadTomlSync
}
