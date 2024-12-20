import { redirect, fail, type Cookies } from '@sveltejs/kit';

export async function load({ cookies }: { cookies: Cookies }) {
	const jwt = cookies.get('jwt');
	console.log(jwt);
	if (jwt) {
		redirect(307, '/');
	}
}

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();

		const user = {
			user: {
				username: data.get('username'),
				email: data.get('email'),
				password: data.get('password')
			}
		};

		await fetch(`http://localhost:3000/api/users`, {
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
			.then((body) => {
				// 이거 필요해?
				console.log('body ', body);
			})
			.catch((error) => {
				console.error(error);
				return fail(error.errors);
			});

		// if (response.status === 422) {
		// 	return fail(response.status, {
		// 		error: response.statusText
		// 	});
		// }
		// TODO: 나중에 alert 안되는 이유 알아보기 (아마도 html에서 해야할수도?)
		// alert('회원가입이 되었습니다. 로그인 페이지로 이동합니다.');
		redirect(307, '/login');
	}
};
