import * as fs from "node:fs";
export const writeFile = (path: string, data: unknown) =>
	new Promise<void>((resolve, reject) => {
		fs.writeFile(path, JSON.stringify(data), (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve();
		});
	});

export const mkDir = (path: string) =>
	new Promise<void>((resolve, reject) => {
		fs.mkdir(path, (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve();
		});
	});

export const readFile = <TData>(path: string) =>
	new Promise<TData>((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject(err);
				return;
			}

			resolve(JSON.parse(data.toString()));
		});
	});
