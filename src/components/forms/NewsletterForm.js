import React, { Component } from 'react'
import classnames from 'classnames'

class NewsletterForm extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '' }
	}

	clickData = () => {
		console.log('window', window.location.href.split('/').pop())
		const params = window.location.href.split('/').pop()
		let link = ''
		// window.open(
		// 	'https://drive.google.com/uc?export=download&id=16UuLxDGioUJxrSlRMpVgVGjil5MlUMfj'
		//
		switch (params) {
			case 'Spa_Zasaly':
				link =
					'https://drive.google.com/file/d/16UuLxDGioUJxrSlRMpVgVGjil5MlUMfj/view?usp=sharing'
				break
			case 'Spa_XuanHung':
				link =
					'https://drive.google.com/file/d/1AODj75F9Rhu17iS8Ic8jvIBWq0gXLeVV/view?usp=sharing'
				break
			case 'Spa_SongNgoc':
				link =
					'https://drive.google.com/file/d/1gUUAleE7HfCDoMYQ98FzQ2oEAVcZxY4C/view?usp=sharing'
				break
			case 'Spa_ShynhHouse':
				link =
					'https://drive.google.com/file/d/1-OZ60bwsucHFoH00qAwQ0JBMaz7_jNeP/view?usp=sharing'
				break
			case 'Spa_Sen':
				link =
					'https://drive.google.com/file/d/1fFpi9IzCgj2BIruQmnA0oOExIjzwiTs8/view?usp=sharing'
				break
			case 'Spa_QuocTe':
				link =
					'https://drive.google.com/file/d/18m3osZlLnADkfaGd5boDq8uYOT2vwmuM/view?usp=sharing'
				break
			case 'Spa_Kay':
				link =
					'https://drive.google.com/file/d/1yS_VcB9rRdac3YzvrKtDTLbVMkTGE_W6/view?usp=sharing'
				break
			case 'Spa_HoaiAnh':
				link =
					'https://drive.google.com/file/d/1TYYgVxYHOAgeIgg8E890EoxgEvefzya5/view?usp=sharing'
				break
			case 'Spa_DrHaiLe':
				link =
					'https://drive.google.com/file/d/1idj7Bp0-z3OFYpLkXf651aMSy3FQm5U_/view?usp=sharing'
				break
			case 'Spa_Diva':
				link =
					'https://drive.google.com/file/d/1A9qwY3won-6FL8iQcFcYqH64qPVnHn86/view?usp=sharing'
				break
			case 'Spa_BichNa':
				link =
					'https://drive.google.com/file/d/1WerKkvlY8tQoN_DiHgJjhXJtgwlzP_YG/view?usp=sharing'
				break
			case 'Pharmacy_YenChau':
				link =
					'https://drive.google.com/file/d/1s691DOthoObeLI6AFD_ohieZbAbzg6V7/view?usp=sharing'
				break
			case 'Pharmacy_TruongGiang':
				link =
					'https://drive.google.com/file/d/1OvnV7-Icg9DEiEKsOHGd3WFxz9wVnRWl/view?usp=sharing'
				break
			case 'Pharmacy_TrungAnh':
				link =
					'https://drive.google.com/file/d/1cuIVJ9FMZM4YXGwOFprhZ98n88wFVJ2J/view?usp=sharing'
				break
			case 'Pharmacy_TrongYen':
				link =
					'https://drive.google.com/file/d/1gGaHh5sLS5AtcsRozeRuBYQeqh4bHB8R/view?usp=sharing'
				break
			case 'Pharmacy_ThinhMai':
				link =
					'https://drive.google.com/file/d/1llIzycYatsBcmU14yMSxaHvYZ4juUFmH/view?usp=sharing'
				break
			case 'Pharmacy_ThienPhu':
				link =
					'https://drive.google.com/file/d/1sIZMYcvdZisIMdQoybjZgIz5KTq7h4_Q/view?usp=sharing'
				break
			case 'Pharmacy_ThaoVan':
				link =
					'https://drive.google.com/file/d/1850rst8z1LLTM3OgHVDgQjMidejasZ3w/view?usp=sharing'
				break
			case 'Pharmacy_ThaoLoan':
				link =
					'https://drive.google.com/file/d/1850rst8z1LLTM3OgHVDgQjMidejasZ3w/view?usp=sharing'
				break

			case 'Pharmacy_TanThaiBinh':
				link =
					'https://drive.google.com/file/d/1WNJi5BAbuV4dK3aTo8ZMcOWQcLtgbJa3/view?usp=sharing'
				break

			case 'Pharmacy_TamPhuong':
				link =
					'https://drive.google.com/file/d/1eJEh9vhBfe8WfRE1e5doV9zDvKpfFGrv/view?usp=sharing'
				break
			case 'Pharmacy_SonMinh':
				link =
					'https://drive.google.com/file/d/195t8ouii2mzRt57ijcHcmewFBW2i2XJa/view?usp=sharing'
				break

			case 'Pharmacy_PhuongLien':
				link =
					'https://drive.google.com/file/d/1XRVDN2o9I41qkg0Apvf6IazmzqnkLGuK/view?usp=sharing'
				break

			case 'Pharmacy_PhuongChau':
				link =
					'https://drive.google.com/file/d/1-D9CKW9Gn0XRz0I0K-pqpN8uINNqIIv4/view?usp=sharing'
				break

			case 'Pharmacy_PhuocThien':
				link =
					'https://drive.google.com/file/d/14dq3Y-VSMwy6ltgT3cS0fplI-TWevYPk/view?usp=sharing'
				break

			case 'Pharmacy_PhucChau':
				link =
					'https://drive.google.com/file/d/1IfM_kkochgk-CuQmI6K5Wzi1xoEVhQAa/view?usp=sharing'
				break

			case 'Pharmacy_NhiTrung':
				link =
					'https://drive.google.com/file/d/14ezRBYTw7ltxvMq8cx8CVpm3567eG5s6/view?usp=sharing'
				break

			case 'Pharmacy_NhanHoa':
				link =
					'https://drive.google.com/file/d/14KbzXzIzRE7e3A8DHkTlxNeSnRxgETBf/view?usp=sharing'
				break

			case 'Pharmacy_MinhTHu':
				link =
					'https://drive.google.com/file/d/1IL-fRWViVjAlTFPi-98t0on9rXW5wosf/view?usp=sharing'
				break

			case 'Pharmacy_MaiLinh':
				link =
					'https://drive.google.com/file/d/1McA-tJZwdgzExQrrRKaBwCTws1tHOoVK/view?usp=sharing'
				break

			case 'Pharmacy_LocPhat':
				link =
					'https://drive.google.com/file/d/1829SUUdlP0Fz5zOuEiRAnJCxlbzLvS8S/view?usp=sharing'
				break

			case 'Pharmacy_KhoeVaDep':
				link =
					'https://drive.google.com/file/d/1nZSVF6xhwW2vIVf8NrKwKY0qBO0NB6K9/view?usp=sharing'
				break

			case 'Pharmacy_HongMinh':
				link =
					'https://drive.google.com/file/d/1waF3K8r3cpACBFR4PNqPk8YwPz5s2bAQ/view?usp=sharing'
				break

			case 'Pharmacy_HoangPhuc':
				link =
					'https://drive.google.com/file/d/1QV8yx74SmmAN_IquBzGacahCehwyTxsG/view?usp=sharing'
				break

			case 'Pharmacy_HienMai':
				link =
					'https://drive.google.com/file/d/1brFXSG-jliJd8Ti3YsqEgWI-X1hf7Hyr/view?usp=sharing'
				break

			case 'Pharmacy_BaoTin':
				link =
					'https://drive.google.com/file/d/1k6EBZtGij6-3VTFq40qttsG9ZZ9u2YP6/view?usp=sharing'
				break

			case 'Pharmacy_BaoDanh':
				link =
					'https://drive.google.com/file/d/1ad6ygAmGrXS1Ko_Ce__70LUP_MsfyDKd/view?usp=sharing'
				break
			case 'Cosmetics_Picare':
				link =
					'https://drive.google.com/file/d/1Qbt3zZCDWKODx5Cy2rEaALwKY79UQBoJ/view?usp=sharing'
				break

			case 'Cosmetics_Nuty':
				link =
					'https://drive.google.com/file/d/134KaCkCG2PfyJP9vA4eDoBIkv1TTtccJ/view?usp=sharing'
				break

			case 'Cosmetics_Karethy':
				link =
					'https://drive.google.com/file/d/1IjR_y-DPGdI8gzntogxcB5jY1BAuQT_S/view?usp=sharing'
				break

			case 'Cosmetics_TopWhite':
				link =
					'https://drive.google.com/file/d/1DidyBl5T4tFwTVHVmGxEhk0hX6Pptg1L/view?usp=sharing'
				break

			case 'Cosmetics_SkinFood':
				link =
					'https://drive.google.com/file/d/1i7bs98HxCS2R1OrHu7RP0Csw7f13EL6T/view?usp=sharing'
				break

			case 'Cosmetics_Sharyn':
				link =
					'https://drive.google.com/file/d/1YgrTvJiS_vM1u5JE1MJvLtHFwpHwGk-P/view?usp=sharing'
				break

			case 'Cosmetics_Sammy':
				link =
					'https://drive.google.com/file/d/1jRoRj0TT6Ul3XhSSYIkMngyt61sHL2n9/view?usp=sharing'
				break

			case 'Cosmetics_Orchard':
				link =
					'https://drive.google.com/file/d/1QQHcgM7aT0M4VJXy3LK-VDe1Vi7chwkW/view?usp=sharing'
				break

			case 'Cosmetics_MinhKhuong':
				link =
					'https://drive.google.com/file/d/13O5TaYtGTZV-ova8_fD6UCuCX_YRJH_y/view?usp=sharing'
				break

			case 'Cosmetics_Medicare':
				link =
					'https://drive.google.com/file/d/1Xm1llmRejGpxJ24-xUz-7Cx568XXy0Ip/view?usp=sharing'
				break

			case 'Cosmetics_iDrSkin':
				link =
					'https://drive.google.com/file/d/1segQV2s0KgX3stWU6DgNjCqc43u4kan5/view?usp=sharing'
				break

			case 'Cosmetics_HealthyBeauty':
				link =
					'https://drive.google.com/file/d/1MtwOwCW4IUKdlGaipTQvyLTlf6XxhZvG/view?usp=sharing'
				break

			case 'Cosmetics_HappySkin':
				link =
					'https://drive.google.com/file/d/1ljNEvzUg5rYU_626vxoYsXIYTaGWTumz/view?usp=sharing'
				break

			case 'Cosmetics_EvaShop':
				link =
					'https://drive.google.com/file/d/1qVob6wgsIDFN4E5CXJ5emai25fo1YAco/view?usp=sharing'
				break

			case 'Cosmetics_Charming':
				link =
					'https://drive.google.com/file/d/12FC0NtcRjZ5XdF9lSFLmiklNQ3TIM-s4/view?usp=sharing'
				break

			case 'Cosmetics_AnhEmBacSi':
				link =
					'https://drive.google.com/file/d/1XYS9E8SHBEOiMqQJ_pdvJkC6Nm7JmYwC/view?usp=sharing'
				break

			case 'Cosmetics_ABBeautyWorld':
				link =
					'https://drive.google.com/file/d/1mkkdzYqtsnxz94hXGH5S1JLfJCKkY-qk/view?usp=sharing'
				break

			case 'Cosmetics_AnSan':
				link =
					'https://drive.google.com/file/d/1DZEj0S_QV6wgb5b0wn-KCZZu8fTPW17G/view?usp=sharing'
				break
			default:
				link = ''
				break
		}
		window.open(link)
	}

	render() {
		const { className, submit = 'Submit' } = this.props
		const { email } = this.state

		return (
			<form
				className={classnames(
					'newsletter-form is-revealing md:flex',
					className
				)}
			>
				{/* <div className="flex-grow flex-shrink mr-2">
					<input
						className="w-full px-4 py-3 text-sm text-gray-500 bg-white border border-gray-300 rounded-sm shadow-none"
						type="email"
						name="email"
						placeholder="Your best email&hellip;"
					/>
				</div> */}

				<div className="control">
					<button
						className="-mt-px text-white shadow-lg bg-secondary-400"
						type="button"
						onClick={this.clickData}
					>
						{submit}
					</button>
				</div>
			</form>
		)
	}
}

export default NewsletterForm
