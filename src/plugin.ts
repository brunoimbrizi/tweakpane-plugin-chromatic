import {
	BaseBladeParams,
	BladeApi,
	BladePlugin,
	LabelController,
	LabelPropsObject,
	ParamsParsers,
	parseParams,
	ValueMap,
} from '@tweakpane/core';

import {PluginController} from './controller';

export interface PluginBladeParams extends BaseBladeParams {
	colors: Array<string>;
	view: 'chromatic';
	label?: string;
}

export const ChromaticBladePlugin: BladePlugin<PluginBladeParams> = {
	id: 'blade-chromatic',
	type: 'blade',
	css: '__css__',

	accept(params) {
		const p = ParamsParsers;
		const result = parseParams<PluginBladeParams>(params, {
			view: p.required.constant('chromatic'),
			colors: p.required.array(p.required.string),
			label: p.optional.string,
		});
		return result ? {params: result} : null;
	},

	controller(args) {
		const controller = new PluginController(args.document, {
			colors: args.params.colors,
			viewProps: args.viewProps,
		});

		return new LabelController(args.document, {
			blade: args.blade,
			props: ValueMap.fromObject<LabelPropsObject>({
				label: args.params.label,
			}),
			valueController: controller,
		});
	},

	api(args) {
		if (!(args.controller instanceof LabelController)) {
			return null;
		}
		if (!(args.controller.valueController instanceof PluginController)) {
			return null;
		}
		return new BladeApi(args.controller);
	},
};
