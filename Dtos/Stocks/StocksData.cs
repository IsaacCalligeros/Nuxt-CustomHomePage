﻿using System;
using Newtonsoft.Json;

namespace Youkozi.Dtos.Stocks
{
    public class StocksData
    {
        [JsonProperty("c")]
        public double Current { get; set; }
        [JsonProperty("h")]
        public double High { get; set; }
        [JsonProperty("l")]
        public double Low { get; set; }
        [JsonProperty("o")]
        public double Open { get; set; }
        [JsonProperty("pc")]
        public double PreviousClose { get; set; }
        [JsonProperty("t")]
        public long Time { get; set; }
    }
}
