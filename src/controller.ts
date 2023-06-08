import {BladeController, createBlade, ViewProps} from '@tweakpane/core';

import {PluginView} from './view';

interface Config {
	colors: Array<string>;
	viewProps: ViewProps;
}

export class PluginController extends BladeController<PluginView> {
	constructor(doc: Document, config: Config) {
		super({
			blade: createBlade(),
			view: new PluginView(doc, config),
			viewProps: config.viewProps,
		});
	}
}
