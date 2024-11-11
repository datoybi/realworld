import { type Cookies } from '@sveltejs/kit';

// TODO: local 사용하기
export async function load({ cookies }: { cookies: Cookies }) {
	const jwt = cookies.get('jwt');
	return { jwt };
}
