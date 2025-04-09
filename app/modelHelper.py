import pickle
import numpy as np
import logging
import pandas as pd



class ModelHelper():
    def __init__(self):
        pass

    def make_predictions(self, hour, day, month, temperature, distance, surge_multiplier, name, is_weekend, source, destination, cab_type):
        df = pd.DataFrame()
        df["hour"] = [hour]
        df["day"] = [day]
        df["month"] = [month]
        df["temperature"] = [temperature]
        df["distance"] = [distance]
        df["surge_multiplier"] = [surge_multiplier]
        df["name"] = [name]
        df["is_weekend"] = [is_weekend]
        df["source"] = [source]
        df["destination"] = [destination]
        df["cab_type"] = [cab_type]

        # Load Model
        model = pickle.load(open("model_pipeline.pkl", 'rb'))

        preds = model.predict(df)
        return(preds[0])
