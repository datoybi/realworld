<script>
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<!-- ❓ header, footer 컴포넌트로 빼야하나? -->
<!-- Unauthenticated user nav -->
<nav class="navbar navbar-light">
	<div class="container">
		<a class="navbar-brand" href="/" aria-current={$page.url.pathname === '/'}>conduit</a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" href="/" aria-current={$page.url.pathname === '/'}>Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/login" aria-current={$page.url.pathname === '/login'}>Sign in</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/register" aria-current={$page.url.pathname === '/register'}
					>Sign up</a
				>
			</li>
		</ul>
	</div>
</nav>

{@render children()}

<footer>
	<div class="container">
		<a href="/" class="logo-font">conduit</a>
		<span class="attribution">
			An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp;
			design licensed under MIT.
		</span>
	</div>
</footer>

<style>
	a[aria-current='true'] {
		color: rgba(0, 0, 0, 0.8) !important;
	}
</style>
