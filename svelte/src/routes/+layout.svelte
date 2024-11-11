<script>
	import { page } from '$app/stores';
	let { children, data } = $props();
	console.log(data.jwt);
</script>

<!-- ❓ header, footer 컴포넌트로 빼야하나? -->
{#if data.jwt}
	<nav class="navbar navbar-light">
		<div class="container">
			<a class="navbar-brand" href="/">conduit</a>
			<ul class="nav navbar-nav pull-xs-right">
				<li class="nav-item">
					<a class="nav-link" href="/" aria-current={$page.url.pathname === '/'}>Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/editor" aria-current={$page.url.pathname === '/editor'}>
						<i class="ion-compose"></i>&nbsp;New Article
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/settings" aria-current={$page.url.pathname === '/settings'}>
						<i class="ion-gear-a"></i>&nbsp;Settings
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="/profile/{JSON.parse(data.jwt).username}"
						aria-current={$page.url.pathname === '/profile/{data.jwt.username}'}
					>
						<!-- TODO: 이미지 없을 때 default image 처리하기 -->
						<img
							src={JSON.parse(data.jwt).image}
							alt={JSON.parse(data.jwt).username}
							class="user-pic"
						/>
						{JSON.parse(data.jwt).username}
					</a>
				</li>
			</ul>
		</div>
	</nav>
{:else}
	<nav class="navbar navbar-light">
		<div class="container">
			<a class="navbar-brand" href="/" aria-current={$page.url.pathname === '/'}>conduit</a>
			<ul class="nav navbar-nav pull-xs-right">
				<li class="nav-item">
					<a class="nav-link" href="/" aria-current={$page.url.pathname === '/'}>Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/login" aria-current={$page.url.pathname === '/login'}
						>Sign in</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/register" aria-current={$page.url.pathname === '/register'}
						>Sign up</a
					>
				</li>
			</ul>
		</div>
	</nav>
{/if}

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
