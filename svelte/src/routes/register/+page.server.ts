export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password')
		};
		console.log(user);
		// fetch api
	}
};
