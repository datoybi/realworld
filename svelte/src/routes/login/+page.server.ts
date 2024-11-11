import { redirect, fail, type Cookies } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
	const jwt = cookies.get('jwt');
	console.log(jwt);
	if (jwt) {
		redirect(307, '/');
	}
}

export const actions = {
	default: async ({ cookies, request }: { cookies: Cookies; request: Request }) => {
		const data = await request.formData();

		const user = {
			user: {
				email: data.get('email'),
				password: data.get('password')
			}
		};
		// TODO: 왜 response.json()으로 넘겨야만 데이터가 표출될까??
		await fetch(`http://localhost:3000/api/users/login`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(user)
		})
			.then((response) => {
				console.log('response', response);
				return response.json();
			})
			.then(({ user }) => {
				console.log('user ', user);
				// const value = btoa(JSON.stringify(user));
				cookies.set('jwt', JSON.stringify(user), { path: '/' });
			})
			.catch((error) => {
				console.error(error);
				return fail(error.errors);
			});

		redirect(307, '/');
	}
};
