import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Bản dùng thử"
				content="Trải nghiệm bản dùng thử miễn phí các chức năng của hệ thống và ứng dụng cho doanh nghiệp của bạn"
				illustration={HeroIllustration}
			/>
		</Layout>
	)
}
