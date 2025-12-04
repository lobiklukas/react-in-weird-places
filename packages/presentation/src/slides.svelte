<script lang="ts">
	import { Presentation } from '@components'
	import {
		TitleSlide,
		IntroSlides,
		ReconcilerIntro,
		ReconciliationSimplified,
		TraditionalTargets,
		WeirdStuffIntro,
		DemoInk,
		DemoReactThreeFiber,
		DemoReactThreeFiberCar,
		DemoReactPDF,
		DemoReactEmail,
		DemoRemotion,
		OtherTargets,
		BuildingRenderers,
		Conclusion,
		// ReconciliationAppendix, // Optional: Uncomment for Q&A
	} from './slides'
</script>

<Presentation>
	<TitleSlide />
	<IntroSlides />
	<ReconcilerIntro />
	<ReconciliationSimplified />
	<TraditionalTargets />
	<WeirdStuffIntro />
	<DemoInk />
	<DemoReactThreeFiber />
	<DemoReactThreeFiberCar />
	<DemoReactPDF />
	<DemoReactEmail />
	<DemoRemotion />
	<OtherTargets />
	<BuildingRenderers />
	<Conclusion />
	<!-- <ReconciliationAppendix /> -->
</Presentation>

<style>
	:global(body) {
		background: #0a0a0a;
		color: #ffffff;
	}
</style>
