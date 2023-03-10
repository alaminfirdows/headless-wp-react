import React, { useEffect, useState } from 'react';

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://headless-wp.instawp.xyz/?rest_route=/wp/v2/posts')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			<Header />

			<div className='container'>
				<div className='grid grid-cols-6 gap-6'>
					{posts.map((post) => (
						<div className='col-span-2'>
							<div key={post.id} className='card'>
								<h2 className='title'>{post.title.rendered}</h2>
								<div
									className='content'
									dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const Header = () => {
	return (
		<div className='header mb-6'>
			<div className='container'>
				<h1 className='logo'>Headless WP</h1>
				<p>Just Another Headless Wordpress Site</p>
			</div>
		</div>
	);
};

export default App;
