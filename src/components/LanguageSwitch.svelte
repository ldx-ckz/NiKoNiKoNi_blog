<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

	type UiLanguage = "zh" | "en";
	let language: UiLanguage = "zh";

	function applyLanguage(nextLanguage: UiLanguage) {
		language = nextLanguage;
		document.documentElement.dataset.uiLang = nextLanguage;
		document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
		localStorage.setItem("uiLanguage", nextLanguage);
	}

	function toggleLanguage() {
		applyLanguage(language === "zh" ? "en" : "zh");
	}

	onMount(() => {
		const savedLanguage = localStorage.getItem("uiLanguage");
		applyLanguage(savedLanguage === "en" ? "en" : "zh");
	});
</script>

<button
	aria-label={language === "zh" ? "Switch interface to English" : "将界面切换为中文"}
	title={language === "zh" ? "English" : "中文"}
	class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"
	onclick={toggleLanguage}
>
	<Icon icon="material-symbols:translate-rounded" class="text-[1.25rem]" />
</button>
