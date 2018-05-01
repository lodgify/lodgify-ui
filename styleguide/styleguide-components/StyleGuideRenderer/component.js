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
import { MobilePlaceholder } from '../MobilePlaceholder';
import { AlphaFlag } from '../AlphaFlag';

import { getIsDevelopmentServer } from './getIsDevelopmentServer';
// Lodgify UI import end

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }) => ({
	root: {
		backgroundColor: color.baseBackground,
		// Lodgify UI styles start
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
		maxWidth,
		padding: [[space[2], space[4]]],
		margin: [[0, 'auto']],
		[mq.small]: {
			padding: space[2],
		},
		display: 'block',
		// Lodgify UI styles start
		position: 'relative',
		// Lodgify UI styles end
	},
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

export function StyleGuideRenderer({ classes, title, homepageUrl, children, toc, hasSidebar }) {
	return (
		<div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
			{/* Lodgify UI markup start */}
			{getIsDevelopmentServer() || <MobilePlaceholder />}
			<AlphaFlag />
			{/* Lodgify UI markup end */}
			<main className={classes.content}>
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

StyleGuideRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	toc: PropTypes.node.isRequired,
	hasSidebar: PropTypes.bool,
};

export default Styled(styles)(StyleGuideRenderer);
