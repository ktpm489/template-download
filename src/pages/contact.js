import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

export default function ContactPage() {
	return (
		<Layout>
			<Article>
				<ArticleContent title="Thông tin liên hệ">
					<p
						style={{ whiteSpace: 'pre' }}
					>{`CÔNG TY TNHH CÔNG NGHỆ TIKITECH `}</p>
					<p>Mã số Thuế: 0316352946 </p>
					<p>
						Địa chỉ: Số 91 Đường N1, Khu dân cư Hiệp Thành Phường Hiệp Thành,
						Quận 12, Thành phố Hồ Chí Minh
					</p>
					<p>Email: hi@tikitech.vn</p>
					<p>Liên hệ: 0903 969 952</p>
					<a href="https://tikitech.vn/">https://tikitech.vn/</a>
				</ArticleContent>

				<ArticleMedia>
					<img
						src="https://tikitech.vn/resources/form-placeholder.svg"
						alt="Lorem Picsum"
					/>
				</ArticleMedia>
			</Article>
		</Layout>
	)
}
