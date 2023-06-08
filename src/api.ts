import {BladeApi, LabelController} from '@tweakpane/core';

import {PluginController} from './controller';

export class PluginApi extends BladeApi<LabelController<PluginController>> {
	get label(): string | null | undefined {
		return this.controller_.props.get('label');
	}

	set label(label: string | null | undefined) {
		this.controller_.props.set('label', label);
	}

	get colors(): Array<string> {
		return this.controller_.valueController.props.get('colors');
	}

	set colors(value: Array<string>) {
		this.controller_.valueController.props.set('colors', value);
	}
}
