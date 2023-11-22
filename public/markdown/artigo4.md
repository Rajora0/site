# Machine Learning Models Using Keras and TensorFlow 

## Introduction 

Immersing yourself in the realm of machine learning can be a daunting task due to the large plethora of concepts and tools. Among these tools, two very prominent, and extensively used ones are TensorFlow and Keras. Implementing machine learning models with these libraries can greatly simplify this seemingly abstruse task. We will dedicate this article to building a firm understanding of these tools, their inception, and how to implement machine learning models using Keras and TensorFlow.

## TensorFlow 
TensorFlow, an open-source software library developed by the Google Brain team, was initially released in November 2015. It was designed as an infrastructure to build and deploy machine learning models and to facilitate research into machine learning as well as its practical applications.

As the name implies, data in TensorFlow is represented as tensors (like multi-dimensional arrays). TensorFlow constructs an execution graph which denotes the computation process as nodes, whereas the data are the edges.

TensorFlow supports a wide range of tasks associated with machine learning and deep learning like neural networks, optimization, image recognition, text analysis, etc. 

![TensorFlow](https://keras.io/img/logo-k-keras-wb.png)

## Keras
Keras, developed and maintained by Francois Chollet, was released in March 2015. Keras is a neural-network-focused open-source library, written in Python.

Although TensorFlow can cater to low-level computation, Keras offers high-level, user-friendly APIs that are specifically designed to be user-friendly and easy to experiment with, making it particularly suited for beginners or for those looking to rapidly prototype. 

As of TensorFlow 1.5, Keras is fully integrated with TensorFlow, and while Keras was initially created for Theano (another open-source machine learning library), its full integration means that it can benefit from TensorFlow's performance, scalability, and deployment mechanisms.

![Keras](https://www.tensorflow.org/static/images/tf_logo_social.png?hl=pt-br)

## Implementation Examples

__Step 1__: First off, we start by importing all the necessary libraries. 

```python
import keras
from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
```

__Step 2__: We'll use the Keras and TensorFlow integrated mnist dataset, which contains grayscale images of handwritten digits. 

```python
(x_train, y_train), (x_test, y_test) = mnist.load_data()
```

__Step 3__: We then preprocess the dataset to optimize learning.

```python
# Reshaping the array to 4-dims so that it can work with the Keras API
x_train = x_train.reshape(x_train.shape[0], 28, 28, 1)
x_test = x_test.reshape(x_test.shape[0], 28, 28, 1)
input_shape = (28, 28, 1)
# Making sure that the values are float so that we can get decimal points after division
x_train = x_train.astype('float32')
x_test = x_test.astype('float32')
# Normalizing in the RGB codes by dividing it to the max RGB value
x_train /= 255
x_test /= 255
```

__Step 4__: Now we define our machine learning model. In this case, we will be using a simple multilayer perceptron model. 

```python
model = Sequential()
model.add(Flatten(input_shape=input_shape))
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(10))
```

__Step 5__: Afterwards, we compile the model.

```python
model.compile(optimizer='adam', 
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

__Step 6__: Then, we train our model with the training data.

```python
model.fit(x_train, y_train, epochs=5)
```

__Step 7__: Lastly, we evaluate our model with the test data.

```python
model.evaluate(x_test,  y_test, verbose=2)
```

## Conclusion 
The goal of this article has been to introduce Keras and TensorFlow and their applicability in designing machine learning models. With these tools, one can effectively implement a wide range of machine learning models, from simple linear regression to complex deep neural networks. 

## References 

1. François Chollet. (2017). Deep learning with Python. New York: Manning.
2. Martín Abadi. (2015). TensorFlow: A system for Large-scale machine learning. URL: www.tensorflow.org.
3. Martín Abadi et al. (2016). TensorFlow: Large-scale machine learning on heterogeneous distributed systems. In OSDI'16 Proceedings of the 12th USENIX conference on Operating Systems Design and Implementation
4. Olah, Christopher (2016), Understanding LSTM Networks. URL: http://colah.github.io/posts/2015-08-Understanding-LSTMs/ 
5. Chollet, François et al. (2015) Keras. URL: https://github.com/fchollet/keras
