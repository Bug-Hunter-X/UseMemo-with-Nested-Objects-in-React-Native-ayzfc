The solution involves ensuring that any changes to nested objects lead to a new object being created, thus triggering a re-render.  Here are two approaches:

**1. Creating a New Object:**
Instead of mutating the nested object, create a new object with the updated values.  This guarantees that `useMemo` detects the change.

```javascript
import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({ nested: { value: 0 } });

  const memoizedData = useMemo(() => ({
    ...data, // Create a new object
    nested: {
      ...data.nested, // Create a new nested object
      value: data.nested.value + 1,
    },
  }), [data.nested.value]);

  const incrementValue = () => {
    setData(prevData => ({ ...prevData, nested: { ...prevData.nested, value: prevData.nested.value + 1 } }));
  };

  return (
    <View>
      <Text>{memoizedData.nested.value}</Text>
      <Button title="Increment" onPress={incrementValue} />
    </View>
  );
};

export default MyComponent;
```

**2. Implementing Deep Comparison (More Complex):**
For more complex scenarios, you might need a deep comparison function to check for changes within nested objects.  This involves recursively comparing the objects' properties.  Libraries like Lodash's `isEqual` can assist with this.