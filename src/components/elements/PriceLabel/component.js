import React, { Fragment, PureComponent } from 'react';
import { Label, GridColumn, GridRow } from 'semantic-ui-react';
import getClassNames from 'classnames';
import PropTypes from 'prop-types';

import { Grid } from 'layout/Grid';
import { Heading } from 'typography/Heading';
import { FlexContainer } from 'layout/FlexContainer';
import { Paragraph } from 'typography/Paragraph';
import { getToggledIsActiveState } from 'utils/get-toggled-is-active-state';

/**
 * A price label displays pricing information relating to nearby content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isActive: false,
  };

  componentDidUpdate = (previousProps, previousState) => {
    const { isActive } = this.state;

    if (previousState.isActive === isActive) return;

    const { name, onChange } = this.props;

    onChange(name, isActive);
  };

  handleClick = syntheticEvent => {
    const { name, onClick } = this.props;

    onClick(name, syntheticEvent);
  };

  toggleActive = () => this.setState(getToggledIsActiveState);

  render = () => {
    const {
      hasShadow,
      isActive,
      isPointing,
      onClick,
      periodText,
      pricePerPeriod,
      pricePerPeriodPrefix,
    } = this.props;

    return (
      <div
        className={getClassNames('ui', 'label', 'price-label', {
          active: isActive || this.state.isActive,
          'is-clickable': onClick !== Function.prototype,
          'is-pointing': isPointing,
          'has-period-text': periodText,
        })}
        onClick={this.handleClick}
        onMouseOut={this.toggleActive}
        onMouseOver={this.toggleActive}
      >
        <Label>
          {!!pricePerPeriod && !periodText ? (
            <Grid
              className={getClassNames({
                active: isActive || this.state.isActive,
                'is-pointing': isPointing,
              })}
            >
              <GridColumn>
                <GridRow>
                  <Heading size="medium">{pricePerPeriod}</Heading>
                </GridRow>
                <GridRow>
                  {isPointing && (
                    <div
                      className={getClassNames('pointer-arrow', 'is-pointing', {
                        active: isActive || this.state.isActive,
                        'has-shadow': hasShadow,
                      })}
                    />
                  )}
                </GridRow>
              </GridColumn>
            </Grid>
          ) : (
            <Fragment>
              <Grid
                className={getClassNames({
                  active: isActive || this.state.isActive,
                  'has-period-text': periodText,
                  'is-pointing': isPointing,
                })}
              >
                <GridColumn>
                  <FlexContainer
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <Paragraph>{pricePerPeriodPrefix}</Paragraph>
                    <Heading size="medium">{pricePerPeriod}</Heading>
                  </FlexContainer>
                  <Label>{periodText}</Label>
                </GridColumn>
              </Grid>
              {isPointing && (
                <div
                  className={getClassNames('pointer-arrow', 'is-pointing', {
                    active: isActive || this.state.isActive,
                    'has-shadow': hasShadow,
                  })}
                />
              )}
              {isPointing && (
                <div
                  className={getClassNames('label-shadow', 'is-pointing', {
                    active: isActive || this.state.isActive,
                    'has-shadow': hasShadow,
                  })}
                />
              )}
            </Fragment>
          )}
        </Label>
      </div>
    );
  };
}

Component.displayName = 'PriceLabel';

Component.defaultProps = {
  hasShadow: false,
  isActive: false,
  isPointing: false,
  name: undefined,
  onChange: Function.prototype,
  onClick: Function.prototype,
  periodText: '',
  pricePerPeriod: '',
  pricePerPeriodPrefix: '',
};

Component.propTypes = {
  /** Does the price label have a shadow. */
  hasShadow: PropTypes.bool,
  /** Is the price label active. */
  isActive: PropTypes.bool,
  /** Is the price label displayed as a pointer. */
  isPointing: PropTypes.bool,
  /** The name for the price label. */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A function called when the active state of the price label changes.
   * @param {string}  name
   * @param {Boolean} isActive
   */
  onChange: PropTypes.func,
  /** The function to call when the price label is clicked.
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** The text describing the pricing period. */
  periodText: PropTypes.string,
  /** The price per period of the property, with currency symbol. */
  pricePerPeriod: PropTypes.string,
  /** The text prefix to display along with the price per period. */
  pricePerPeriodPrefix: PropTypes.string,
};
