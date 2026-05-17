---
type: concept
title: Guide Tangent Space
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "23b1845eb237"
---
构建一个沿曲线的相干切线空间。
### Parameters
Given a normal direction for the root point, propagates the normal along the curve while minimizing orientation along the curve’s tangent vector.

This operator is used internally by various grooming tools.

## PARAMETERS

## Creation

Group

Affect this group of primitives.

Normal Mode

Use this method to define the curve normal at the root point.

Guide Normal Attribute

Use a primitive normal attribute on the curve.

Skin Tangent Attribute

Use a tangent vector attribute on the skin. The attribute is looked up at the skin position closest to each curve’s root point.

Skin UV Gradient

Use the gradient vector of the skin’s UV coordinates at the point closest to each curve’s root point.

Guide Normal Attribute

Use this normal attribute with **Normal Mode** set to **Guide Normal Attribute**.

Skin Tangent Attribute

Use this skin tangent attribute with **Normal Mode** set to **Skin Tangent Attribute**.

UV Attribute

Use this UV attribute with **Normal Mode** set to **Skin UV Gradient**.

## Output

outputnormal

Output the computed normal vector.

Normal Name

Use this name for the output normal vector.

outputtangent

Output the computed tangent vector.

Tangent Name

Use this name for the output tangent vector.

outputbitangent

Output the computed bitangent. (The cross product of tangent and normal vector)

Bitangent Name

Use this name for the output bitangent vector.

See also

-   [item](https://www.sidefx.com/docs/houdini/link.html)Given a normal direction for the root point, propagates the normal along the curve while minimizing orientation along the curve’s tangent vector.

This operator is used internally by various grooming tools.

## PARAMETERS

## Creation

Group

Affect this group of primitives.

Normal Mode

Use this method to define the curve normal at the root point.

Guide Normal Attribute

Use a primitive normal attribute on the curve.

Skin Tangent Attribute

Use a tangent vector attribute on the skin. The attribute is looked up at the skin position closest to each curve’s root point.

Skin UV Gradient

Use the gradient vector of the skin’s UV coordinates at the point closest to each curve’s root point.

Guide Normal Attribute

Use this normal attribute with **Normal Mode** set to **Guide Normal Attribute**.

Skin Tangent Attribute

Use this skin tangent attribute with **Normal Mode** set to **Skin Tangent Attribute**.

UV Attribute

Use this UV attribute with **Normal Mode** set to **Skin UV Gradient**.

## Output

outputnormal

Output the computed normal vector.

Normal Name

Use this name for the output normal vector.

outputtangent

Output the computed tangent vector.

Tangent Name

Use this name for the output tangent vector.

outputbitangent

Output the computed bitangent. (The cross product of tangent and normal vector)

Bitangent Name

Use this name for the output bitangent vector.

See also

-   [item](https://www.sidefx.com/docs/houdini/link.html)