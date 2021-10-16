import React, { Component } from 'react'
import classnames from 'classnames'

class NewsletterForm extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '' }
	}

	clickData = () => {
		window.open(
			'https://drive.google.com/uc?export=download&id=16UuLxDGioUJxrSlRMpVgVGjil5MlUMfj'
		)
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
