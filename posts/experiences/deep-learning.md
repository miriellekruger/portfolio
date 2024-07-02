---
title: 'Drug-Drug Interaction' 
date: '2023-08-01'
description: 'Deep Learning Analysis.'
tag: 'Python, PyTorch, Google Colab'
type: "class group project"
img: "/images/deeplearning.png"

---

Drug-drug interactions (DDIs) prediction is crucial for preventing harm and optimizing resource allocation in healthcare.  Graph Neural Networks (GNNs) are effective for predicting DDIs by treating drugs as nodes and interactions as edges in a graph.

### Objectives
  - Replicate and validate top-ranking models (GIDN, AGDN) on the ogbl-ddi dataset to understand GNNs.
  - Attempt to improve upon existing models by modifying architectures and hyperparameters.

### Approach
  - Utilized the OGB dataset derived from DrugBank 5.0, containing 4,267 drug nodes and 2,135,822 edges representing interactions.
  - Implemented GIDN and AGDN architectures, leveraging Deep Graph Library (DGL) and PyTorch on Google Colab due to GPU requirements.
  - Evaluated performance using Hits@K metrics (specifically Hits@20) to measure how well models rank true interactions against non-interacting pairs.

### Experiments and Results
  - Successfully replicated GIDN and AGDN models, achieving results close to original benchmarks on Hits@20 (95.36% and 95.08% respectively).
  - Explored modifications like increasing diffusion depth (K) and adding dropout layers to AGDN to enhance performance, but results varied (e.g., validation Hits@20 dropped with increased dropout).
  - Attempted to exceed benchmark performance by adjusting model architectures and hyperparameters, noting challenges such as training instability and computational constraints.

### Conclusion and Future Work
  - Achieved significant insight into GNNs for DDI prediction through model replication and enhancement attempts.
  - Identified avenues for future research including refining link prediction strategies to better reflect biological interactions and optimizing model robustness against overfitting and underfitting.
