<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
	console.log(form);
</script>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Sign up</h1>
				<p class="text-xs-center">
					<a href="/login">Have an account?</a>
				</p>

				{#if form?.error}
					<ul class="error-messages">
						<li>That email is already taken</li>
					</ul>
				{/if}

				<form use:enhance method="POST">
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							type="text"
							placeholder="Username"
							name="username"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							type="text"
							placeholder="Email"
							name="email"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							type="password"
							placeholder="Password"
							name="password"
						/>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
				</form>
			</div>
		</div>
	</div>
</div>
