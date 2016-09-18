import React, { PropTypes } from 'react';
import './GeckoMeter.css';

const width = 240;
const height = width / 2;
const needle = 3;

const styles = {
  wrapper: {},
  container: { width, height },
  background: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  center: {
    width: width * .80,
    height: height * .80,
    top: height * .20,
    marginLeft: height * .20,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  data: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  needle: {
    left: height,
    top: height - needle,
    width: height,
    height: needle,
  },
  labels: {
    width: width + 10,
  }
};
const dataTurns = (min, max, val) => -.5 + .5 * val / (max - min);

const GeckoMeter = ({ min, max, value, unit}) => {
  return(
    <article style={styles.wrapper} className="gom--wrapper">
      <section>{unit}{value}</section>

      <section style={styles.container} className="gom--container">
        <section style={styles.background} className="gom--background"></section>
        <section style={styles.center} className="gom--center"></section>
        <section className="gom--data" style={
          Object.assign({}, styles.data, {
            transform: `rotate(${dataTurns(min, max, value)}turn)`
          })
        }></section>
        <section className="gom--needle" style={
          Object.assign({}, styles.needle, {
            transform: `rotate(${dataTurns(min, max, value)}turn)`
          })
        }></section>
      </section>

      <section style={styles.labels} className="gom--labels">
        <article className="gom--labels_min">{min}</article>
        <article className="gom--labels_max">{max}</article>
      </section>
    </article>
  )
}

GeckoMeter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 200,
  value: 150,
  unit: null,
}

export default GeckoMeter;
