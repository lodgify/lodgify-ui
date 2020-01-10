```jsx
import { PriceLabel } from '@lodgify/ui';

<PriceLabel 
  pricePerPeriod="€200" 
  periodText="per month" 
  pricePerPeriodPrefix="from" 
  onClick={console.log}
/>
```

### Without period text

```jsx
import { PriceLabel } from '@lodgify/ui';

<PriceLabel pricePerPeriod="€200" onClick={console.log}/>
```

### Variations

#### Pointing

```jsx
import { PriceLabel } from '@lodgify/ui';

<div style={{
  backgroundColor: '#888',
  height: '100px',
  padding: '10px',
  boxSizing: 'content-box',
  paddingBottom: 0,
  position: 'relative',}}
>
  <PriceLabel 
    isPointing 
    pricePerPeriod="€200"
    pricePerPeriodPrefix="from"  
    periodText="per month" 
    onClick={console.log}
  />
</div>
```

#### Has shadow

```jsx
import { PriceLabel } from '@lodgify/ui';

<PriceLabel 
  hasShadow
  isPointing 
  pricePerPeriod="€200"
  pricePerPeriodPrefix="from"  
  periodText="per month" 
  onClick={console.log}
/>
```

### States

#### Active

```jsx
import { PriceLabel } from '@lodgify/ui';

<PriceLabel 
  isActive
  hasShadow
  isPointing 
  pricePerPeriod="€200"
  pricePerPeriodPrefix="from"  
  periodText="per month" 
  onClick={console.log}
/>
```