import {Controller, ViewProps} from '@tweakpane/core';

import {PluginProps, PluginView} from './view';

interface Config {
	props: PluginProps;
	viewProps: ViewProps;
}

export class PluginController implements Controller<PluginView> {
	public readonly props: PluginProps;
	public readonly view: PluginView;
	public readonly viewProps: ViewProps;

	constructor(doc: Document, config: Config) {
		this.props = config.props;
		this.viewProps = config.viewProps;

		this.view = new PluginView(doc, {
			props: this.props,
			viewProps: this.viewProps,
		});
	}
}
