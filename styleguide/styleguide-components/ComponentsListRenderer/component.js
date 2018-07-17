/**
 *
 * Lodgify UI overwrite of
 * React Styleguidist ComponentsListRenderer.
 *
 * Most of this file is a duplicate of
 * https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/ComponentsList/ComponentsListRenderer.js
 *
 * Search 'Lodgify UI' for custom script, styles and markup.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontFamily, fontSize, space, mq }) => ({
	list: {
		margin: 0,
		// Lodgify UI custom styles start
		paddingLeft: 0,
		// Lodgify UI custom styles end
	},
	item: {
		color: color.base,
		display: 'block',
		// Lodgify UI custom styles start
		margin: [[space[1], 0, 0, 0]],
		// Lodgify UI custom styles end
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		listStyle: 'none',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	isChild: {
		[mq.small]: {
			display: 'inline-block',
			margin: [[0, space[1], 0, 0]],
		},
	},
	// Lodgify UI custom styles start
	heading: {
		marginTop: space[4],
		fontFamily: fontFamily.base,
		fontWeight: 'bold',
		display: 'inline-block',
		fontSize: '11px',
		textTransform: 'uppercase',
	},
	isCurrentPage: {
		color: color.type,
	}
	// Lodgify UI custom styles end
});

export function ComponentsListRenderer({ classes, items }) {
	items = items.filter(item => item.name);

	if (!items.length) {
		return null;
	}

	return (
		<ul className={classes.list}>
			{items.map(({ heading, name, href, content }) => (
				<li
					// Lodgify UI custom markup start
					className={cx(
						classes.item,
						{
							[classes.isChild]: (!content || !content.props.items.length),
							[classes.isCurrentPage]: href && global.encodeURI(href) === `/${global.location.hash}`
						}
					)}
					// Lodgify UI custom markup end
					key={href}
				>
					{/* Lodgify UI custom markup start */}
					{
						heading
							? <span className={classes.heading}>{name}</span>
							: <Link href={href}>{name}</Link>
					}
					{/* Lodgify UI custom markup end */}
					{content}
				</li>
			))}
		</ul>
	);
}

ComponentsListRenderer.propTypes = {
	items: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired,
	useIsolatedLinks: PropTypes.bool,
};

export default Styled(styles)(ComponentsListRenderer);
