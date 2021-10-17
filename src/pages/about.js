import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

export default function AboutPage() {
	return (
		<Layout>
			<Article>
				<ArticleContent title="About">
					<a>https://tikitech.vn</a>
				</ArticleContent>

				<ArticleMedia>
					<img
						src="https://picsum.photos/420/640?grayscale"
						alt="Lorem Picsum"
					/>
				</ArticleMedia>
			</Article>
		</Layout>
	)
}
