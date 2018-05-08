/**
 *
 * Lodgify UI overwrite of
 * React Styleguidist StyleGuideRenderer.
 *
 * Most of this file is a duplicate of
 * https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/StyleGuide/StyleGuideRenderer.js
 *
 * Search 'Lodgify UI' for custom script, styles and markup.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';
import Ribbon from 'rsg-components/Ribbon';

// Lodgify UI import start
import { compose } from 'recompose';

import { withResponsive } from 'utils/with-responsive';

import { MobilePlaceholder } from '../MobilePlaceholder';
import { AlphaFlag } from '../AlphaFlag';

import { getIsDevelopmentServer } from './getIsDevelopmentServer';
// Lodgify UI import end

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth, zIndices }) => ({
	root: {
		// Lodgify UI styles start
		backgroundBlendMode: 'soft-light',
		backgroundColor: color.base,
		backgroundImage: 'url(lego-repeat.png)',
		backgroundSize: '500px',
		backgroundRepeat: 'repeat',
		// Lodgify UI styles end
	},
	hasSidebar: {
		paddingLeft: sidebarWidth,
		[mq.small]: {
			paddingLeft: 0,
		},
	},
	content: {
		// Lodgify UI styles start
		// maxWidth,
		// Lodgify UI styles end
		padding: [[space[2], space[4]]],
		// Lodgify UI styles start
		// margin: [[0, 'auto']],
		margin: 0,
		// Lodgify UI styles end
		[mq.small]: {
			padding: space[2],
		},
		display: 'block',
		// Lodgify UI styles start
		backgroundColor: color.baseBackground,
		backgroundImage: 'url(lego-repeat.png)',
		backgroundPosition: `-${sidebarWidth}px 0`,
		backgroundSize: '500px',
		backgroundRepeat: 'repeat',
		position: 'relative',
		transition: 'width 1s ease, padding 1s ease',
		width: '100%',
		willChange: 'width, padding',
		[mq.large]: {
			padding: [[space[2], '15%']],
		},
		[mq.xlarge]: {
			padding: [[space[2], '20%']],
		}
		// Lodgify UI styles end
	},
	// Lodgify UI styles start
	hasDarkPanel: {
		margin: 0,
		padding: [[space[2], space[4]]],
		width: '50%',
	},
	codeToggle: {
		cursor: 'pointer',
    position: 'fixed',
    right: 0,
    bottom: 0,
    padding: space[2],
    color: color.white,
		transition: 'color 0.15s ease 0.15s',
		zIndex: zIndices.codeToggle,
	},
	isDarkText: {
		color: color.base,
		transition: 'color 0.15s ease 0.85s',
	},
	// Lodgify UI styles end
	sidebar: {
		backgroundColor: color.sidebarBackground,
		border: [[color.border, 'solid']],
		borderWidth: [[0, 1, 0, 0]],
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		width: sidebarWidth,
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		[mq.small]: {
			position: 'static',
			width: 'auto',
			borderWidth: [[1, 0, 0, 0]],
			paddingBottom: space[0],
		},
	},
	logo: {
		padding: space[2],
		borderBottom: [[1, color.border, 'solid']],
	},
	footer: {
		display: 'block',
		color: color.light,
		fontFamily: fontFamily.base,
		fontSize: fontSize.small,
		// Lodgify UI styles start
		bottom: space[4],
		position: 'absolute',
		// Lodgify UI styles end
	},
});

// Lodgify UI script start
// StyleGuideRenderer is a pure functional component in React Styleguidist
// which is mostly duplicated in the render method of this class.
export class StyleGuideRenderer extends React.Component {

	state = {
		isCodeVisible: true,
	}

	getChildContext = () => ({
		handleClickViewCode: this.handleClickViewCode,
		isCodeVisible: this.state.isCodeVisible,
	})

	handleClickViewCode = () => {
		this.setState({ isCodeVisible: !this.state.isCodeVisible });
	}

	render () {
		const {
			classes,
			title,
			homepageUrl,
			children,
			toc,
			hasSidebar,
			// Lodgify UI script start
			windowInnerWidth
			// Lodgify UI script end
		} = this.props;

		// Lodgify UI script start
		const { isCodeVisible } = this.state;

		const getIsXLargeScreen = () => windowInnerWidth > 1199;
		// Lodgify UI script end

		return (
			<div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
				{/* Lodgify UI markup start */}
				{getIsDevelopmentServer() || <MobilePlaceholder />}
				<AlphaFlag />
				<main className={cx(
					classes.content, {
						[classes.hasDarkPanel]: getIsXLargeScreen() && isCodeVisible
					})}>
					{getIsXLargeScreen() &&
						<div
							className={cx(
								classes.codeToggle,
								{ [classes.isDarkText]: !isCodeVisible }
							)}
							onClick={this.handleClickViewCode}
						>
							{`${this.state.isCodeVisible ? 'Hide' : 'Show'} code`}
						</div>}
				{/* Lodgify UI markup end */}
					{children}
					<footer className={classes.footer}>
						<Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
					</footer>
				</main>
				{hasSidebar && (
					<div className={classes.sidebar}>
						<div className={classes.logo}>
							<Logo>{title}</Logo>
						</div>
						{toc}
					</div>
				)}
				<Ribbon />
			</div>
		);
	}
}
// Lodgify UI script end

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool,
	// Lodgify UI script start
	windowInnerWidth: PropTypes.number,
	// Lodgify UI script end
};

// Lodgify UI script start
StyleGuideRenderer.childContextTypes = {
  handleClickViewCode: PropTypes.func,
  isCodeVisible: PropTypes.bool,
};
// Lodgify UI script end

// Lodgify UI export start
export default compose(
	withResponsive,
	Styled(styles)
)(StyleGuideRenderer);
// Lodgify UI export end
