/**
 *
 * Lodgify UI overwrite of
 * React Styleguidist PlaygroundRenderer.
 *
 * Most of this file is a duplicate of
 * https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/Playground/PlaygroundRenderer.js
 *
 * Search 'Lodgify UI' for custom script, styles and markup.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

// Lodgify UI import start
import { compose } from 'recompose';

import { withResponsive } from 'lib/with-responsive';
// Lodgify UI import end

export const styles = ({ space, color, borderRadius, mq }) => ({
	root: {
		marginBottom: space[4],
  	// Lodgify UI styles start
  	marginTop: space[2],
		[mq.xlarge]: {
	  	width: `calc(200% + ${space[4] * 2}px)`,
		},
		// Lodgify UI styles end
	},
	preview: {
		padding: space[2],
		border: [[1, color.border, 'solid']],
		borderRadius,
		// the next 2 lines are required to contain floated components
	  width: '100%',
	  display: 'inline-block',
	  // Lodgify UI styles start
	  [mq.xlarge]: {
		  marginRight: space[4],
		  verticalAlign: 'top',
		  width: `calc(50% - ${space[4]}px)`,
		},
	// Lodgify UI styles end
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
	},
	toolbar: {
		marginLeft: 'auto',
	},
	tab: {
  // Lodgify UI styles start
  [mq.xlarge]: {
		display: 'inline-block',
		marginLeft: space[4],
		width: `calc(50% - ${space[4]}px)`,
	},
	// Lodgify UI styles end
}, // expose className to allow using it in 'styles' settings
});

export function PlaygroundRenderer({
	classes,
	name,
	preview,
	previewProps,
	tabButtons,
	tabBody,
	toolbar,
// Lodgify UI script start
	windowInnerWidth,
}, {
	handleClickViewCode,
	isCodeVisible
}) {
// Lodgify UI script end
	const { className, ...props } = previewProps;
	return (
		<div className={classes.root}>
			<div className={cx(classes.preview, className)} {...props} data-preview={name}>
				{preview}
			</div>
    {/* Lodgify UI markup start */}
		{windowInnerWidth < 1200 ? (
			[
				<div key="iHateKeys" className={classes.controls}>
					<div className={classes.tabs}>{tabButtons}</div>
					<div className={classes.toolbar}>{toolbar}</div>
				</div>,
				<div key="iReallyDo" className={classes.tab}>{tabBody}</div>
			]
		) : isCodeVisible && (
	    React.cloneElement(tabBody, {
	      className: classes.tab,
	      active: 'rsg-code-editor',
	    })
		)}
    {/* Lodgify UI markup end */}
		</div>
	);
}

PlaygroundRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	preview: PropTypes.node.isRequired,
	previewProps: PropTypes.object.isRequired,
	tabButtons: PropTypes.node.isRequired,
	tabBody: PropTypes.node.isRequired,
	toolbar: PropTypes.node.isRequired,
	// Lodgify UI script start
	windowInnerWidth: PropTypes.number,
	// Lodgify UI script end
};

// Lodgify UI script start
PlaygroundRenderer.contextTypes = {
  handleClickViewCode: PropTypes.func,
  isCodeVisible: PropTypes.bool,
};
// Lodgify UI script end

// Lodgify UI export start
export default compose(
	withResponsive,
	Styled(styles)
)(PlaygroundRenderer);
// Lodgify UI export end
