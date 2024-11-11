import { redirect, type Cookies } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }: { cookies: Cookies }) => {
		cookies.delete('jwt', { path: '/' });
		redirect(307, '/');
	}
};
